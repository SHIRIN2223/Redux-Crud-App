# State Yönetimi
 nmp create vite . npm i redux react-redux  kurulum
- State: Uygulamadakı bileşenlerin sahip olduğu bilgi ve özellikler.
- Prop Drilling: Birleşenlerin yukarıdan aşagıya veri taşıması
- Context Apı: Uygulamadakı statelerin yönetilebildiği state yönetim aracı
- Redux: Bisleşenlerin sahip oldugu ve merkezi olarak tutulması gereken statel'erin yönetimini sağlar

# Neden Redux

- Kod tekrarını önler
- Perfonmasını sağlar
- Birleşen içerisindeki karişıklıgı azaltır
- Hata ayıklama daha kolaydır
- Orta büyük ölçekli uygulamalarda state yönetimini kolaylaştırır

- Redux ilgili bilinmesi gerekenler
1. Store: Uygulamanın bütün bileşenleri tarafından erişilen ve değiştirile bilen merkezi state deposu


2. Reducer: Aksiyondan aldığı talimat ve state ile store'u içerisinde barındırdıgı fonksiyon sayesinde günceleyen yapı

3. Action: Store güncellemek için reducer'a gönderdigimiz haber

- Action iki değere sahip bir objedir
 
- type: Aciton'un görevini tanımlayan string ifade (ADD_TOOD)

- PAYLOAD: Gönderilen aylemin verisi (newTodo)

4. Dispatch: Action'un gerçekleştigini store'a erişimini tanımlayan terim (useContext / useSelector)

5. Subscribe: Bileşenlerin store'a erişimini tanımlayan terim (useContext / useSelector)

6. Provider: Store'da tutulan verileri uygulamaya sağlar.

# Redux kullanmak için aşamalar (kurulum)
- 'redux' ve 'react-redux' paketlerini indir
- store kurulumunu yap
- reducer kurlumunu yap
- storeyi projeye tanıt

# Altın Kural
- Hem api hem redux ın kullanıldıgı projelerde
- store'i  güncelleme işlemini ile isteği bağımlı hale getirilmeli
- ancak istek başarılı olursa store'da değişim gerçekleşmeli

















# Redux-Crud-App
