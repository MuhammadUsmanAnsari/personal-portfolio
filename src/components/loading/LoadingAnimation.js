import loading from 'assets/loading/loading.gif'
import './_loading.scss'

export default function LoadingAnimation() {
    return (
        <>
            <div class="loading">
                <div class="loading-text">
                    <span class="loading-text-words">L</span>
                    <span class="loading-text-words">O</span>
                    <span class="loading-text-words">A</span>
                    <span class="loading-text-words">D</span>
                    <span class="loading-text-words">I</span>
                    <span class="loading-text-words">N</span>
                    <span class="loading-text-words">G</span>
                </div>
            </div>
        </>
    )
}