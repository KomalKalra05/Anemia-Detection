import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { pred_knn } from '../services/Apis';
import '../styles/forms.css';

const KNN = () => {
  const [gender, setGender] = useState('');
  const [haemoglobin, setHaemoglobin] = useState('');
  const [mch, setMch] = useState('');
  const [mchc, setMchc] = useState('');
  const [mcv, setMcv] = useState('');
  const [predictionOptimized, setPredictionOptimized] = useState(null);
  const [predictionAllFeatures, setPredictionAllFeatures] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem('userdbtoken');
    if (!token) {
      navigate('*');
    }
  };

  useEffect(() => {
    userValid();
  }, []);

  const makePrediction = async (e) => {
    e.preventDefault(); 

    if (!gender || !haemoglobin || !mch || !mchc || !mcv) {
      setError('All fields are required');
      return;
    }

    try {
      const responseOptimized = await pred_knn({
        gender:gender==='male'?0:1,
        haemoglobin,
        mch,
        mchc,
        mcv,
        features: 'optimized',
      });

      const responseAllFeatures = await pred_knn({
        gender:gender==='male'?0:1,
        haemoglobin,
        mch,
        mchc,
        mcv,
        features: 'all',
      });

      setPredictionOptimized(responseOptimized.data.prediction);
      setPredictionAllFeatures(responseAllFeatures.data.prediction);
      setShowModal(true);
      setError('');
    } catch (error) {
      console.error('Error making prediction:', error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className='section'>
        <div className='data'>
          <div className='heading'>
            <h2>K-Nearest Neighbours</h2>
          </div>
          <form onSubmit={makePrediction}>
          <div className="input">
            <label htmlFor='gender'>Gender</label><br />
            <select style={{marginBottom:'10px',border:'1px solid black',borderRadius: '7px'}}
              value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor='haemoglobin'>Haemoglobin</label><br />
              <input type="number" value={haemoglobin} onChange={(e) => setHaemoglobin(e.target.value)} />
            </div>
            <div className="input">
              <label htmlFor='mch'>MCH</label><br />
              <input type="number" value={mch} onChange={(e) => setMch(e.target.value)} />
            </div>
            <div className="input">
              <label htmlFor='mchc'>MCHC</label><br />
              <input type="number" value={mchc} onChange={(e) => setMchc(e.target.value)} />
            </div>
            <div className="input">
              <label htmlFor='mcv'>MCV</label><br />
              <input type="number" value={mcv} onChange={(e) => setMcv(e.target.value)} />
            </div>
            <button className='butn' type="submit">
              Predict
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          {predictionOptimized !== null && predictionAllFeatures !== null && (
            <Modal show={showModal} onHide={handleCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Prediction Result</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Optimized Result: {predictionOptimized}</p>
                <p>All Features Result: {predictionAllFeatures}</p>
              </Modal.Body>
              <Modal.Footer>
              <Button variant='secondary' onClick={handleCloseModal} style={{ backgroundColor: '#e45a5a', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
              Close
              </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </section>
    </>
  );
};

export default KNN;