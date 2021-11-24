//  sphereVolume()will calculate the volume of a sphere given a radius
//  coneVolume() will calculate the volume of a cone given a radius and a height
//  prismVolume() will calculate the volume of a prism given a height, a width, and a depth

//  The fourth function, totalVolume(), will receive an array containing the 
//  different shapes that make up a single attraction. The totalVolume 
//  function should use the previous three functions to calculate the total 
//  volume of an attraction.

const sphereVolume = function (radius) {
  return (4/3) * (Math.PI) * (radius ** 3)
}

const coneVolume = function (radius, height) {
  return Math.PI * (radius ** 2) * (height/3)
}

const prismVolume = function (height, width, depth) {
  return height*width*depth
}

const totalVolume = function (solids) {
  result = 0;
  for (shape of solids)
    if (shape.type === 'sphere') 
    result += sphereVolume(shape.radius);
    else if (shape.type === 'cone') 
    result += coneVolume(shape.radius,shape.height);
    else if (shape.type === 'prism') 
    result += prismVolume(shape.height,shape.width,shape.depth);  
  return result;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(prismVolume(3, 4, 5) === 60);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);


