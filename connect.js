const connection = mysql.createConnection({
  host: 'localhost',   // hoặc IP nếu là server khác
  user: 'root',        // hoặc username của MySQL
  password: '',        // mật khẩu MySQL
  database: 'tutiennro'  // tên database trong phpMyAdmin
});
