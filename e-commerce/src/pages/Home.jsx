function Home() {

  const styles = {
    section: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      minHeight: "70vh",
      padding: "40px",
      backgroundColor: "#f8fafc",
    },

    content: {
      maxWidth: "500px",
    },

    heading: {
      fontSize: "45px",
      color: "#111827",
      marginBottom: "20px",
    },

    paragraph: {
      fontSize: "18px",
      color: "#4b5563",
      lineHeight: "1.6",
    },

    button: {
      marginTop: "20px",
      padding: "12px 25px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },

    image: {
      fontSize: "120px",
    }
  };


  return (
    <>
      <section style={styles.section}>

        <div style={styles.content}>
          <h1 style={styles.heading}>
            Shop Smart, Live Better
          </h1>

          <p style={styles.paragraph}>
            Discover the latest fashion, electronics and accessories at amazing
            prices.
          </p>

          <button style={styles.button}>
            Shop Now
          </button>
        </div>


        <div style={styles.image}>
          🛍️
        </div>

      </section>
    </>
  );
}

export default Home;