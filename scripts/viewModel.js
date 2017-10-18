let allBusinesses = ['The great Pizza', 'Five Guys', 'Nick the Greek', 'Abesha Restaurant', 'Amigo Mio' ];
let searchBox = document.getElementById("search-box");
let ulList = document.getElementById("list-ul");

let viewModel = function appViewModel() {
    console.log("Hey I'm inside viewModel");
    let self = this;
    console.log(items);
    
    this.businessToRender = ko.observableArray();
    this.itemsToRender = ko.observableArray();
    
    for(let i = 0; i < allBusinesses.length; i++){
        self.businessToRender().push(allBusinesses[i]);
    }
    // With items from foursquare
    for(let i = 0; i < items.length; i++){
        self.itemsToRender().push(items[i]);
    } 
    console.log("items to render: ", self.itemsToRender());
    this.listedBusiness = ko.observableArray([
    ]);

    this.listedItems =  ko.observableArray([]);

    
    this.filter = function(){
        // self.listedBusiness([]);
        self.listedItems([]);
        let noMatches = 0;
        
        for(let i = 0; i < self.itemsToRender().length; i++) {
            let currentItem = self.itemsToRender()[i];
            let currentItemName = currentItem.venue.name;

            if(currentItemName.toLowerCase().indexOf(searchBox.value.toLowerCase()) != -1){
                self.listedItems.push(
                    {
                        name: ko.observable(currentItemName)
                    }
                );
            } else {
                
                noMatches++;
                
                if(noMatches === self.itemsToRender().length){
                    self.listedItems([
                        {
                            name: "No Matches"
                        }
                    ]);
                }
                
            }
            console.log(self.listedItems);
        }
    }
    

    console.log(this.businessToRender());
}
