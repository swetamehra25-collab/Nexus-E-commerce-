function Footer() {

  const styles = {
    footer: {
      marginTop: "auto",
      backgroundColor: "#111827",
      color: "white",
      padding: "30px 50px",
      textAlign: "center",
    },

    container: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },

    section: {
      margin: "10px",
    },

    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },

    hr: {
      margin: "20px 0",
      borderColor: "#374151",
    },

    copyright: {
      fontSize: "14px",
    }
  };

  return (
    <footer style={styles.footer}>

      <div style={styles.container}>

        <div style={styles.section}>
          <h2 style={styles.title}>Nexus Store</h2>
          <p>Shop Smart. Shop Better.</p>
        </div>

        <div style={styles.section}>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Products</p>
          <p>Cart</p>
        </div>

        <div style={styles.section}>
          <h4>Contact</h4>
          <p>support@swiftstore.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

      <hr style={styles.hr} />

      <p style={styles.copyright}>
        © 2026 Nexus Store | All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;