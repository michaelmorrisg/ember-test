import Component from '@ember/component';

export default Component.extend({
    actions : {
        showPerson(person){
            alert(`You stinkin clicked on ${person}`)
        }
    }
});
