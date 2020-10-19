import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase)

export const new_notify = functions.https.onRequest((request, response) => {
    
    let data: any
    try{
        data = JSON.parse(request.body)
    }catch{
        data = request.body
    }
    data.date = admin.firestore.Timestamp.fromDate(new Date())
    console.log(data)
    admin.firestore().collection('notify').add(data).then(() => {
        response.status(200).send('Saved Successfully');
    }, 
    error => {
        response.status(500).send(error);
    });
});


