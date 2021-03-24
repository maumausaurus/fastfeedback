import firebase from './lib/firebase';

const firestore = firebase.firestore()

export const createSite = async (data) => {

        const res = await firestore.collection('sites').add({
            link: data.siteLink,
            name: data.siteName,
            //owner
        });
       
}