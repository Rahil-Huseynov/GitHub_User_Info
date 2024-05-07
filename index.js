const input_github_username = document.getElementById('username');

const userInfo = document.getElementById('user-info');

input_github_username.onkeydown = (e) => {

    if (e.key === 'Enter') {

        getUserInfo();

    }
};

async function getUserInfo() {

    const username = document.getElementById('username').value;

    const section = document.getElementById('section')

    const response = await fetch('https://api.github.com/users/' + username);

    const data = await response.json();

    if (response.status === 200) {

        userInfo.innerHTML = `

        <div class="profil_photo">

        <img src="${data.avatar_url}">

        <p><strong>Adı:</strong> ${data.name || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Daxil ol:</strong> ${data.login || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        </div>

        <div class="github_container_about">

        <p><strong>GitHub Linki:</strong> <a href="${data.html_url || 'Məlumat yoxdur'}">${data.html_url || 'Məlumat yoxdur'}</a></p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Bloq Linki:</strong> <a href="${data.blog || '#'}">${data.blog || 'Məlumat yoxdur'}</a></p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Şəhər:</strong> ${data.location || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Poçt:</strong> ${data.email || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Abunəçilərin sayı:</strong> ${data.followers}</p>

        <div style="border: 1px solid black; ; opacity: 0.1;"></div>

        <p><strong>Abunələrin sayı:</strong> ${data.following}</p>

        <div style="border: 1px solid black; opacity: 0.1;"></div>

        </div>
        `;

        section.style.display = 'block'
    } else {

        userInfo.innerHTML = "<p>Belə bir istifadəçi tapılmadı.</p>";
    }
}

