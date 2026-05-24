function classifyJsBasicsScore(score) {

  
  if (score >= 90 && score<=100) {
    return "EXCELLENT";
  }
  else if (score >= 75 && score < 90) {
   return "GOOD";
  }
  else if (score >= 50 && score <= 74) {
    return "NEEDS_PRACTICE";
  }
  else if (score < 50) {
    return "REVISIT";
  }

}