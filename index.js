
const github_button = document.getElementById('github_button')
    
    github_button.addEventListener('click', () => {

        const User = async () => {

            const username = document.getElementById('username').value;

            const response = await fetch('https://api.github.com/users/' + username);

            const data = await response.json();

            const userInfo = document.getElementById('user-info');

            if (response.status === 200) {
                    userInfo.innerHTML = `
                    <div class="github_container_about">

                    <p><strong>Adı:</strong> ${data.name || 'Məlumat yoxdur'}</p>

                    <p><strong>Daxil ol:</strong> ${data.login || 'Məlumat yoxdur'}</p>

                    <p><strong>GitHub Linki:</strong> <a href="${data.html_url || 'Məlumat yoxdur'}">${data.html_url || 'Məlumat yoxdur'}</a></p>

                    <p><strong>Bloq Linki:</strong> <a href="${data.blog || '#'}">${data.blog || 'Məlumat yoxdur'}</a></p>

                    <p><strong>Şəhər:</strong> ${data.location || 'Məlumat yoxdur'}</p>

                    <p><strong>Poçt:</strong> ${data.email || 'Məlumat yoxdur'}</p>

                    <p><strong>Abunəçilərin sayı:</strong> ${data.followers}</p>

                    <p><strong>Abunələrin sayı:</strong> ${data.following}</p>
                    </div>
                    <div class="profil_photo">
                    <img src="${data.avatar_url}">
                    </div>
                `;
                } else {
                    userInfo.innerHTML = "<p>Belə bir istifadəçi tapılmadı.</p>";

                }
          
        };

        User();
    });
