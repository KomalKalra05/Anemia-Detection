import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

def predict_opt_result_rf(gender, hemoglobin, mcv ):
    df = pd.read_csv('Anemia.csv') 

    X = df[["Gender", "Hemoglobin", "MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    clf=RandomForestClassifier()
    clf.fit(X_train,y_train)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"

    
def predict_result_rf(gender, hemoglobin, mch,mchc, mcv ):
    df = pd.read_csv('Anemia.csv')

    X = df[["Gender", "Hemoglobin", "MCH" ,"MCHC" , "MCV"]]
    y = df['Result']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, shuffle=True, random_state=101)

    clf=RandomForestClassifier()
    clf.fit(X_train,y_train)
    pred = {'Gender':gender,'Hemoglobin':hemoglobin,'MCH':mch,'MCHC':mchc,'MCV':mcv}
    p_x = pd.DataFrame([pred])
    predict = clf.predict(p_x)
    if predict==1:
        return "Anemic"
    else:
        return "Non-anemic"