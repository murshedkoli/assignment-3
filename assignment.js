



//1 kilometer = 1000 meter, so , kilometer*1000=meter
function kilometerToMeter(kilo){
    var convert = kilo * 1000;
    return convert;
}





//BudgetCalculator
function budgetCalculator(ghori, phone, laptop){
    var ghoriprice = ghori * 50;
    var phoneprice = phone * 100;
    var laptopprice = laptop * 500;

    var totalbudget = ghoriprice + phoneprice + laptopprice;
    return totalbudget;
}





//hotelCost 
function hotelCost(spandday){
    if(spandday <= 10){
        var totalCost = spandday * 100;
    }
    else if(spandday <= 20){
        var firstCost = 10 * 100;
        var secondCostDay = spandday - 10;
        var secondCost = secondCostDay * 80;
        var totalCost = firstCost + secondCost;
    }

    else{
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var thirdCostDay = spandday - 20;
        var thirdCost = thirdCostDay * 50;
        var totalCost = firstCost + secondCost + thirdCost;
    }

    return totalCost;
}



