$.ajax({
    url: 'https://reqres.in/api/users?page=2',
    method: 'get',
    success: function(response) {
        console.log(response.data);
        let data = response.data;
        let html = '';
        for(let i = 0; i < data.length; i++) {
            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body text-center">
                <h5 class="card-title">${data[i].first_name} ${data[i].last_name}</h5>
                <p class="card-text">${data[i].email}</p>
                </div>
                <img src="${data[i].avatar}" class="card-img-top" alt="img">
            </div>
            `;
        }
        $('.data_ajax').html(html);
    },
    error: function(errorMessage) {
        console.log('Error: ' + errorMessage);
    }
})

fetch('https://reqres.in/api/users?page=1')
    .then((res) => res.json())
    .then((data) => {
        data = data.data;
        console.log(data);
        let html = '';
        for(let i = 0; i < data.length; i++) {
            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body text-center">
                <h5 class="card-title">${data[i].first_name} ${data[i].last_name}</h5>
                <p class="card-text">${data[i].email}</p>
                </div>
                <img src="${data[i].avatar}" class="card-img-top" alt="img">
            </div>
            `;
        }
        $('.data_fetch').html(html);
    })
    .catch((err) => {
        console.log('Error: ' + err);
    })
