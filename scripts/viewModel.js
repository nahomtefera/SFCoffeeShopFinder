let allBusinesses = ['The great Pizza', 'Five Guys', 'Nick the Greek', 'Abesha Restaurant', 'Amigo Mio' ];
let searchBox = document.getElementById("search-box");
let ulList = document.getElementById("list-ul");

let viewModel = function appViewModel() {
    console.log("Hey I'm inside viewModel");
    let self = this;
    
    this.businessToRender = ko.observableArray();

    
    for(let i = 0; i < allBusinesses.length; i++){
        self.businessToRender().push(allBusinesses[i]);
    }

    this.listedBusiness = ko.observableArray([
    ]);

    
    this.filter = function(){
        self.listedBusiness([]);
        let noMatches = 0;
        
        for(let i = 0; i < self.businessToRender().length; i++) {
            let currentItem = self.businessToRender()[i];
            if(currentItem.toLowerCase().indexOf(searchBox.value.toLowerCase()) != -1){
                console.log(currentItem);
                self.listedBusiness.push(
                    {
                        name: ko.observable(currentItem)
                    }
                );
                
            } else {
                
                noMatches++;
                
                if(noMatches === self.businessToRender().length){
                    self.listedBusiness([
                        {
                            name: "No Matches"
                        }
                    ]);
                }
                
            }
        }
        console.log("\n")
        
    }
    

    console.log(this.businessToRender());
}

// Activate Knockout.js
ko.applyBindings(new viewModel());