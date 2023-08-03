document.addEventListener('DOMContentLoaded', function() {
    const teacherCards = document.querySelectorAll('.teacher-card');

    function showCards() {
        teacherCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show-card');
            }, index * 200);
        });
    }

    showCards();
});
