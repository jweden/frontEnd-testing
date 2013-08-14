function setUpHTMLFixture() {
        jasmine.getFixtures().set(' <p>This is a paragraph.</p>           \
                                    <input type="text" class="textField">          \
                                    <br>                                             \
                                    <button class="hideButton" onclick=hide()>Hide</button>              \
                                    <button class="showButton" onclick=show()>Show & Print</button>  \
                                    <div class="div2" id="div2"></div>                         \
                                    <br>                             \
                                    <div class="div3"></div>   \
                                ');
}

describe("Tests for Show Button on Form", function() {

    var formText = "some text here for show test"
    beforeEach(function() {
        setUpHTMLFixture();

        $( ".textField" ).val(formText);
        $(".showButton").click();
    });

    it("should result in correct text about show button clicked", function() {
        expect($( ".div2" )).toHaveText("Show & Print button clicked");
    });

    it("should result in paragraph being visible", function() {
        expect($("p")).toBeVisible();
    });

    it("should result in correct text from form being printed out", function() {
        expect($( ".div3" )).toHaveText(formText);
    });
});

describe("Tests for Hide Button on Form", function() {

    var formText = "some text here for hide test"
    beforeEach(function() {
        setUpHTMLFixture();

        $( ".textField" ).val(formText);
        $(".hideButton").click();
    });

    it("should result in correct text about hide button clicked", function() {
        expect($( ".div2" )).toHaveText("Hide button clicked");
    });

    it("should result in paragraph being hidden", function() {
        expect($("p")).toBeHidden();
    });

    it("should result in form text being hidden", function() {
        expect($( ".div3" )).toBeEmpty();
    });
});
