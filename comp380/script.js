document.getElementById('color-vision').addEventListener('change', (event) => {
  const bodyClassList = document.body.classList;
  
  bodyClassList.remove('default', 'red-green', 'complete');

  const selectedVision = event.target.value;
  bodyClassList.add(selectedVision);
});
