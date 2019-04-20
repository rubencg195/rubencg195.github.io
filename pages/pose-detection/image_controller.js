async function uploadRefImage(e) {
  //Upload Image
  const imgFile = $(imgInputId).get(0).files[0];
  if (!imgFile) {
    return;
  }
  //Show Loader
  $(loaderTab1Id).show();
  $(loaderTextTab1Id).html("Uploading Image...");
  const img = await faceapi.bufferToImage(imgFile);
  $(imgTab1Id).get(0).src = img.src;
  console.log("Uploading Content");

  $(imgContainerId).show();
  //Write the results on screen
  updateReferenceImageResults();
}
async function updateReferenceImageResults() {
  
  $(loaderTab1Id).show();
  $(loaderTextTab1Id).html("Recognizing Pose...");

  console.log("Detecting Pose");
  const imageElement = $(imgTab1Id).get(0);
  const canvas = $(imgTab1OverlayId).get(0);
  var ctx = canvas.getContext("2d");
  canvas.width = $(imgTab1Id).width();
  canvas.height = $(imgTab1Id).height();
  if (net && imageElement) {
    // const pose = await net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
    // poses = [pose];
    // console.log(imageElement);
    // poses = await net.estimateMultiplePoses(
    //   imageElement, imageScaleFactor, flipHorizontal, outputStride,    
    //   maxPoseDetections, scoreThreshold, nmsRadius);

    poses = [await net.estimateSinglePose(
      imageElement, imageScaleFactor, flipHorizontal, outputStride)];

    // console.log("Pose", poses);
    // download(poses[0].keypoints, 'json.txt', 'text/plain');
    // console.log(JSON.stringify(poses[0].keypoints));
    console.log("Image Input size: ", imageElement.width, imageElement.height, poses);

    drawKeypoints(ctx);
  } else {
    console.log("Net or Image not defined.");
  }
  $(imgTab1Id).show();
  $(loaderTab1Id).hide();
}

