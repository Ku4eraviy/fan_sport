 document.addEventListener('DOMContentLoaded', function() {
            const loadMoreBtn = document.getElementById('loadMore');
            const hiddenReviews = document.querySelectorAll('.review.hidden');
            let visibleCount = 2; // Количество отзывов, показываемых при каждом нажатии
            
            loadMoreBtn.addEventListener('click', function() {
                // Показываем следующую порцию отзывов
                let shown = 0;
                hiddenReviews.forEach(review => {
                    if (review.style.display !== 'block' && shown < visibleCount) {
                        review.style.display = 'block';
                        review.classList.remove('hidden');
                        shown++;
                    }
                });
                
                // Скрываем кнопку, если больше нет скрытых отзывов
                if (document.querySelectorAll('.review.hidden').length === 0) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        });