function downloadAsync(urls, onSuccess, onError) {
  var result = [];
  if (!urls || !urls.length) {
    setTimeout(() => onSuccess(result), 0);
  }
  var completeCount = 0;
  urls.forEach((url, index) => {
    downloadUrl(url, (error, response) => {
      if (result) {
        if (error) {
          result = null;
          onError(error);
        } else {
          result[index] = response;
          if (++completeCount === urls.length) {
            onSuccess(result);
          }
        };
      }
      
    });
    
  });
}


function downloadUrl(url, callback) {
  setTimeout(() => callback(null, url), Math.random() * 1000);
}


downloadAsync([1, 2, 3, 4, 5, 6, 7, 8], (result) => console.log(result));

