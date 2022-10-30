
const http = axios.create();


async function AddImageToFtp() {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('excelFile', fileField.files[0]);
    formData.append('sendfile', fileField.files[1]);



    try {
        await http.post('https://localhost:7089/WeatherForecast', formData);

        alert("İşlem Başarılı");
        location.reload();
    }
    catch (err) {
        alert(err.message);
    }
}

async function AddImageToFtp2() {
    var a = await http.get('https://api.bonafidatekstil.com/WeatherForecast');
    console.log(a);
}

const btnSendApi = document.getElementById("btnSendApi");
btnSendApi.addEventListener("click", myFunction);
async function myFunction() {
    if (document.getElementById('excelFile').files[0]) {
        document.getElementById("formRow").style.display = "none";
        document.getElementById("loadingRow").style.display = "flex";
        const formData = new FormData();

        formData.append('MailListFile', document.getElementById('excelFile').files[0]);
        formData.append('Attachment', document.getElementById('htmlFile').files[0]);
        formData.append('Body', document.getElementById("htmlText").value);
        formData.append('Subject', document.getElementById("subject").value);
        formData.append('key', document.getElementById("key").value);

        
        try {
            var res = await http.post('https://api.bonafidatekstil.com/Mail', formData);
            //var res = await http.post('https://localhost:7089/Mail', formData);
            alert(res.data);
        } catch (error) {
            alert("Hata Oluştu");
            document.getElementById('subject');
        }

        document.getElementById("formRow").style.display = "block";
        document.getElementById("loadingRow").style.display = "none";
    }else{
        alert("Excel Dosyanızı Seçiniz.");
        document.getElementById('excelFile').click();
    }
}

