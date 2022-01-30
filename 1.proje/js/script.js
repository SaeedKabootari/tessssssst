function diameter(graph) {
    let myGraph;
    if(typeof graph[0][1] === 'string'){
        myGraph = graph.map(i =>Math.abs(convertLetterToNumber(i[1]) - convertLetterToNumber(i[0])));
    }else{
        myGraph = graph.map(i =>Math.abs((i[1]) - (i[0])));
    }  
    let r = myGraph.reduce((a, b) => Math.min(a, b)); 
    let d = myGraph.reduce((a, b) => Math.max(a, b));
    let answer = `{r:${r}, d:${d}}`;
    console.log(answer)
    return answer;
  }


  function convertLetterToNumber(str) {
    str = str.toUpperCase();
    let out = 0, len = str.length;
    for (pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }


  
