/**
 * Created by vajirad on 15/01/2017.
 */
suite('Global Tests', function(){
   test('page has a valid title', function () {
       assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
   }) ;
});