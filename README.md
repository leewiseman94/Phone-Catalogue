

# REACT - Phone Catalog
The challenge is to create a phone catalogue app from scratch.
### Minimum requirements
In broad terms the idea is to have as an outcome at least the following:
- A __REST API__ providing phones' information.
    - It can be implemented in whatever language you are most comfortable
with (NodeJS / Rails / Java, ...)
    - It should have at least one endpoint:
        - Method: GET
        - Path: /phones
        - Response example:
        ~~~ 
        [{
        "id": 0,
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.", "color": "black",
        "price": 769,
        "imageFileName": "IPhone_7.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
        }...]

- A __REACT APP__ allowing the user to browse the phones catalog.
    - The look and feel should not be super sophisticated but it should be decent and somehow responsive so that it doesn’t look terrible on a
mobile phone.
    - The home page should display the list of phones. Make sure to display
images of them.
    - It should be possible to select a given phone and obtain the phone details
view displaying a few more info about that phone.
    - The phones’ information should be retrieved from the above described API.
    - There should be a spinner or placeholder component while the REST API request is ongoing and the app is waiting for phones data.
