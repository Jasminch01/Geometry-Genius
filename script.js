function calculateTriangleArea(){
    //get element id
    const inputBase = getElementID('triangle-base');
    const inputHeight = getElementID('triangle-height');
    // validate
    if(isNaN(inputBase) || isNaN(inputHeight)){
        alert('Please insert number');
        return
    }
    //calculate triangle area
    const area = 0.5 * inputBase * inputHeight;
    updateValue('triangle-area', area);
    addToCalculationEntry('Triangle', area)
    
}

// /calculate Ractangle Area 
function calculateRectangleArea(){
    //get element id
    const width = getElementID('rectangle-width');
    const length = getElementID('rectangle-length');
    // validate
    if(isNaN(width) || isNaN(length)){
        alert('Please insert number');
        return
    }
    //calculate area 
    const area = width * length;
    updateValue('rectangle-area', area);
    addToCalculationEntry('Ractangle', area)
}
// /calculate parallelogram
function calculateParallelogramArea(){
    //get element id
    const base = getElementID('parallelogram-base');
    const height = getElementID('parallelogram-height');
    // validate
    if(isNaN(height) || isNaN(base)){
        alert('Please insert number');
        return
    }
    //calculate area 
    const area = base * height;
    updateValue('parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area)
}

//calculate Ellipse
function calculateEllipseArea(){
    //get element id
    const majorRadius = getElementID('ellipse-major-radius');
    const minorRadius = getElementID('ellipse-minor-radius');
    // validate
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert number');
        return
    }
    //calculate area 
    const area = 3.41 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    updateValue('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse', areaTwoDecimal)

}

//get element id
function getElementID(id){
    const elementID = document.getElementById(id);
    const elementIDValue = elementID.value;
    const updateElementValue = parseFloat(elementIDValue)
    return updateElementValue;
}

// convert the input value
function updateValue(elementID, area){
   const element = document.getElementById(elementID);
   element.innerText = area;
}

//Calculation Entry
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    console.log(count)

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success text-white">Convert</button>`;

    calculationEntry.appendChild(p);

}