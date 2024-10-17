function filter(attraction, age, height) {
    //write your JS code here:
    
    if(!isNaN(attraction.minAge) && age < attraction.minAge){
        return false;
    }

    if(!isNaN(attraction.maxAge) && age > attraction.maxAge){
        return false;
    }

    if(!isNaN(attraction.minHeght) && height < attraction.minHeight){
        return false;
    }

    if(!isNaN(attraction.maxHeght) && height > attraction.maxHeight){
        return false;
    }

    return true;
}