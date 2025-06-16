# Anemia Prediction & Blood Cell Classification System

A healthcare diagnostic tool that uses machine learning to predict anemia and classify blood cell images. Built for medical professionals, lab technicians, and healthcare students.

## 🎯 Overview
This system has two main features:
1. **Anemia Prediction**: Analyzes 5 blood parameters to predict if a patient has anemia
2. **Blood Cell Classification**: Identifies blood cell types (eosinophil or neutrophil) from microscopy images

## ✨ Features
* **Dual Functionality**: Anemia prediction + blood cell image classification
* **Multiple ML Models**: Decision Tree, Random Forest, Logistic Regression, SVM, and CNN
* **High Accuracy Models**: Decision Tree and Random Forest achieve the highest prediction accuracy
* **Model Selection**: Users can choose from multiple ML algorithms for comparison
* **Secure Login**: Twilio OTP and email verification
* **Real-time Results**: Instant predictions for both blood tests and cell images
* **User-friendly Interface**: Easy-to-use web application

## 🏗️ Tech Stack
**Frontend:**
* React.js for user interface
  
**Backend:**
* Node.js for main server
* Flask for ML/DL model APIs
* MongoDB Atlas for database
  
**Authentication:**
* Twilio for SMS OTP
* SMTP for email verification

**Machine Learning:**
* **Traditional ML**: Decision Tree (highest accuracy), Random Forest (highest accuracy), Logistic Regression, SVM, KNN, Naive Bayes
* **Deep Learning**: CNN for image classification

## 🔄 How It Works
**Anemia Prediction:**
1. User logs in securely
2. Enters 5 blood test values
3. Selects preferred ML model (Decision Tree or Random Forest recommended for best accuracy)
4. System runs the chosen model
5. Gets anemia prediction result with confidence score

**Blood Cell Classification:**
1. User uploads cell image
2. CNN processes the image
3. System identifies cell type
4. Shows classification result

## 🔧 Technical Details
**Anemia Prediction:**
* **Input**: 5 blood parameters (hemoglobin,MCH etc.)
* **Models**: Multiple ML algorithms with model selection feature
* **Best Performers**: Decision Tree and Random Forest models achieve highest accuracy
* **Output**: Anemic or Non-anemic

**Blood Cell Classification:**
* **Input**: Microscopy images of blood cells
* **Model**: CNN trained on cell images
* **Output**: Eosinophil or Neutrophil classification
