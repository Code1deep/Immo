// Animation simple sur les noeuds de la structure
document.querySelectorAll('.node.child').forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.style.borderColor = '#66bb6a';
    });
    node.addEventListener('mouseleave', () => {
        node.style.borderColor = '#a5d6a7';
    });
});
