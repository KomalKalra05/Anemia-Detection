const axios = require('axios');
const PredictedData = require('../models/dbSchema'); 

exports.prediction_svm =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;

        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_svm', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_dt =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_dt', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// exports.prediction_dt =  async (req, res) => {
//     console.log("I AM CALLED")

//     let sagemakerUrl = "https://bv3r6489e9.execute-api.us-east-1.amazonaws.com/stage_1"

//     fetch(sagemakerUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "gender": Number(req.body.gender),
//             "hemoglobin": Number(req.body.hemoglobin),
//             "mch": Number(req.body.mch),
//             "mchc": Number(req.body.mchc),
//             "mcv": Number(req.body.mcv),
//         })
//     })

//     .then((resp) => resp.json())
//     .then((jsonData) => {
//         // console.log(jsonData)
//         let singlePred = jsonData.Output
//         let result = (singlePred == 1) ? "Anemic" : "Non Anemic"
//         let toSend = {
//             "DecisionTreeClassifier": [result, result]
//         }
//         console.log(toSend)
//         res.status(200).json({ success: true, response: toSend })
//     })
//     .catch((err) =>{console.log(err); res.status(500).json({message: err})})

//     return
//     };

exports.prediction_knn =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_knn', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_lr =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_lr', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_nb =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_nb', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.prediction_rf =  async (req, res) => {
    try {
        const { gender, haemoglobin,mch, mchc, mcv, features } = req.body;
        
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict_rf', { gender, haemoglobin,mch, mchc, mcv,features });
        const prediction = mlResponse.data.prediction;

        const newData = { gender, haemoglobin,mch, mchc, mcv, result: prediction };
        const createdData = await PredictedData.create(newData);

        res.json({ prediction, newData: createdData });
    } catch (error) {
        console.error('Error making prediction and storing data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};