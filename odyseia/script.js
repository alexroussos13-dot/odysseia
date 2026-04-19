const characters = {
  odysseus: {
    name: "Οδυσσέας",
    role: "Ήρωας • Στρατηγός",
    traits: ["Εξυπνάδα", "Δημιουργικότητα", "Ηγεσία"],
    desc: "Ο βασικός ήρωας της Οδύσσειας. Ξεχωρίζει για τη στρατηγική του σκέψη και την ικανότητά του να επιβιώνει σε ακραίες καταστάσεις."
  },

  athena: {
    name: "Αθηνά",
    role: "Θεά • Σοφία",
    traits: ["Σοφία", "Καθοδήγηση", "Δικαιοσύνη"],
    desc: "Θεά που προστατεύει και καθοδηγεί τον Οδυσσέα σε όλη του τη διαδρομή."
  },

  poseidon: {
    name: "Ποσειδώνας",
    role: "Θεός • Θάλασσα",
    traits: ["Οργή", "Δύναμη", "Εκδίκηση"],
    desc: "Κύριος αντίπαλος του Οδυσσέα λόγω της τύφλωσης του Πολύφημου."
  },

  penelope: {
    name: "Πηνελόπη",
    role: "Άνθρωπος • Πίστη",
    traits: ["Υπομονή", "Πίστη", "Ευφυΐα"],
    desc: "Η πιστή σύζυγος του Οδυσσέα που τον περιμένει για χρόνια."
  },

  polyphemus: {
    name: "Πολύφημος",
    role: "Κύκλωπας • Απειλή",
    traits: ["Δύναμη", "Αφέλεια", "Βία"],
    desc: "Ο μονόφθαλμος κύκλωπας που παγιδεύει τον Οδυσσέα και τους συντρόφους του."
  },

  calypso: {
    name: "Καλυψώ",
    role: "Νύμφη • Απομόνωση",
    traits: ["Γοητεία", "Έλεγχος", "Παράταση"],
    desc: "Κρατά τον Οδυσσέα στο νησί της για 7 χρόνια προσφέροντάς του αθανασία."
  }
};

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalTraits = document.getElementById("modalTraits");
const modalDesc = document.getElementById("modalDesc");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    const data = characters[id];

    modalTitle.textContent = data.name;
    modalRole.textContent = data.role;
    modalDesc.textContent = data.desc;

    modalTraits.innerHTML = "";

    data.traits.forEach(t => {
      const span = document.createElement("span");
      span.textContent = "• " + t;
      modalTraits.appendChild(span);
    });

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});