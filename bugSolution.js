// Correct implementation using Promises

exports.myFunction = functions.https.onCall(async (data, context) => {
  const externalDataPromise = fetchExternalData(); // Asynchronous operation
  
  const externalData = await externalDataPromise;
  
  // Now safely access and use externalData in your Firestore operations
  const firestoreData = await admin.firestore().collection('myCollection').doc('myDoc').get();
  // ... further processing
});

// Helper function to simulate an external API call
function fetchExternalData() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a delay
    setTimeout(() => {
      resolve({ externalValue: 'some data' });
    }, 1000);
  });
} 