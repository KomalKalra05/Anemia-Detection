# Anemia Prediction & Blood Cell Classification System

A healthcare diagnostic tool that uses machine learning to predict anemia and classify blood cell images. Built for medical professionals, lab technicians, and healthcare students.

## 🎯 Overview

This system has two main features:
1. **Anemia Prediction**: Analyzes 5 blood parameters to predict if a patient has anemia
2. **Blood Cell Classification**: Identifies blood cell types (eosinophil or neutrophil) from microscopy images

## ✨ Features

- **Dual Functionality**: Anemia prediction + blood cell image classification
- **Multiple ML Models**: Logistic Regression, Random Forest, SVM, and CNN
- **Secure Login**: Twilio OTP and email verification
- **Real-time Results**: Instant predictions for both blood tests and cell images
- **User-friendly Interface**: Easy-to-use web application

## 🏗️ Tech Stack

**Frontend:**
- React.js for user interface
- Responsive design for different devices

**Backend:**
- Node.js for main server
- Flask for ML/DL model APIs
- MongoDB Atlas for database

**Authentication:**
- Twilio for SMS OTP
- SMTP for email verification

**Machine Learning:**
- Traditional ML: Logistic Regression, Random Forest, SVM, Decision Tree, Naive Bayes
- Deep Learning: CNN for image classification

## 🔄 How It Works

**Anemia Prediction:**
1. User logs in securely
2. Enters 5 blood test values
3. System runs ML models
4. Gets anemia prediction result

**Blood Cell Classification:**
1. User uploads cell image
2. CNN processes the image
3. System identifies cell type
4. Shows classification result

## 🔧 Technical Details

**Anemia Prediction:**
- **Input**: 5 blood parameters (hemoglobin, RBC count, etc.)
- **Models**: Multiple ML algorithms for better accuracy
- **Output**: Anemic or Non-anemic

**Blood Cell Classification:**
- **Input**: Microscopy images of blood cells
- **Model**: CNN trained on cell images
- **Output**: Eosinophil or Neutrophil classification
