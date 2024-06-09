setTimeout(() => {
    //anında opaklığı 1 yap
    //Y eksenini 0 yap
    document.getElementById("model-y-info").style.opacity = 1;
    document.getElementById("model-y-info").style.transform = "translateY(0)";
  }, 0);

  setTimeout(() => {
    //1 saniyede opaklığı 1 yap
    //Y eksenini 0 yap
    document.getElementById("model-y-footer").style.opacity = 1;
    document.getElementById("model-y-footer").style.transform = "translateY(0)";
  }, 1000);