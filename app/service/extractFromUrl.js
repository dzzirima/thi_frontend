function extractNumberFromURL(url) {
    const regex = /drivingschool\/(\d+)/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      return match[1];
    }
    
    return null;
  }


  export default extractNumberFromURL