document.addEventListener('DOMContentLoaded', () => {
    const flipCoinButton = document.getElementById('flip-coin');
    const coinContainer = document.querySelector('.coin-container');
    const countdownImages = document.querySelectorAll('.countdown');
    const headsCoin = document.getElementById('heads');
    const tailsCoin = document.getElementById('tails');
    const resultText = document.getElementById('result-text');

    flipCoinButton.addEventListener('click', () => {
        flipCoinButton.style.display = 'none';
        countdownImages[0].style.display = 'block';

        function displayCountdownImage(index) {
            if (index < countdownImages.length) {
                setTimeout(() => {
                    countdownImages[index].style.display = 'none';

                    if (index < countdownImages.length - 1) {
                        countdownImages[index + 1].style.display = 'block';
                    } else {
                        const result = Math.random() < 0.5 ? 'heads' : 'tails';

                        if (result === 'heads') {
                            headsCoin.style.display = 'block';
                            resultText.textContent = '앞면';
                            tailsCoin.style.display = 'none';
                        } else {
                            headsCoin.style.display = 'none';
                            resultText.textContent = '뒷면';
                            tailsCoin.style.display = 'block';
                        }

                        coinContainer.style.display = 'flex';

                        setTimeout(() => {
                            headsCoin.style.opacity = 1;
                            tailsCoin.style.opacity = 1;
                        }, 100);
                    }

                    displayCountdownImage(index + 1);
                }, 1000);
            }
        }

        displayCountdownImage(0);
    });
});
