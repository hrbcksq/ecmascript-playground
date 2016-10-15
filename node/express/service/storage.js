module.exports = createStorage = function() {
    //Lorem ipsum ;)
    var storage = [
        {
            "id": "d58a4cf6-333c-4008-a14c-e6b049a54f99",
            "firstname": "Tony",
            "lastname": "Alpino"
        },
        {
            "id": "4f843b95-a512-43aa-80d9-edefb99889b6",
            "firstname": "Jane",
            "lastname": "Loo"
        },
        {
            "id": "af00b898-da71-4525-948e-081bca826dd4",
            "lastname": "Alfred",
            "firstname": "Einstein"
        },
        {
            "id": "6a48d967-452a-4941-aa1a-9fb752777e78",
            "firstname": "Summer",
            "lastname": "Autumn"
        }
    ];

    //Storage mock
    storage.selector = function(id) {        
        return this.find((obj) => obj.id === id)    
    }
    return storage;
};