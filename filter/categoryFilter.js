carouselApp.filter('filterByCategory', function() {
    return function(categoryDescription, categorylist) {
        console.log(categoryDescription, categorylist);
    
        var ret =[];
        for (var i in categoryDescription){
            var match = false;
            for (var j in categorylist){
               
                if (categorylist[j].selected && categorylist[j].company == categoryDescription[i].company){
                   ret.push(categoryDescription[i]);   
                    console.log(ret)
                }
            }
        }
        if (ret.length > 0){
            return ret;
        } else {
            return categoryDescription;
        }
    };
  })