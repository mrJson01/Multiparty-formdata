# Multiparty npm

This is site with multiparty/form-data form that will be send through formData in a script. <br/>
For selecting multpily files use multiply and accept for defining acceptable file type. 

```html

<input type="file" accept="image/*" multiple/> 

```

**FileReader** <br/>

To show selected file as a image use FileReader , it is necessary to define new reader for <br/>
each image. 

```javascript

var file = new FileReader();

file.onload = function(){
    let result = this.result;
    //img is a selected element that given file will be shown in
    img.src = result;
}

file.readAsDataURL(input.files[0]); // files are in array

```

Worth to remember event for the inputs. <br/>
**Input** event is called when the value of the input is changed. <br/>
**Submit** event is called when submiting a form.

```javascript

input.addEventListener('input',function(){/*   DO SOMETHING HERE   */});
form.addEventListener('submit',function(){/*   DO SOMETHING HERE   */});

```

