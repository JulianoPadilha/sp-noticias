(function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.saopaulo.sp.gov.br/wp-json/wp/v2/posts?categories=255');
    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);

            Array.prototype.forEach.call(data, function(post) {
                var article = document.createElement('article');
                var title = document.createElement('a');
                var content = document.createElement('p');

                var section = document.querySelector('.articles');

                title.setAttribute('href', post.link);
                title.setAttribute('target', '_blank');

                section.appendChild(article);
                article.appendChild(title);
                article.appendChild(content);

                title.insertAdjacentHTML('beforeend', post.title.rendered);
                content.insertAdjacentHTML('beforeend', post.excerpt.rendered);  
            });
        } else {
            console.log("Fail");
        }
    };
    
    xhr.onerror = function() {
      console.log("Conecting error");
    };
    
    xhr.send();
})();