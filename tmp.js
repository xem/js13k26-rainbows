function placeRandomItems(count, radius, minDistance) {
    const items = [];

    for (let i = 0; i < count; i++) {

        let x, y;
        let attempts = 0;

        do {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * radius;

            x = Math.cos(angle) * r;
            y = Math.sin(angle) * r;

            attempts++;

            // Évite de boucler indéfiniment si le cercle est trop rempli
            if (attempts > 1000) {
                console.warn("Impossible de placer tous les items");
                break;
            }

        } while (
            items.some(item =>
                Math.hypot(item.x - x, item.y - y) < minDistance
            )
        );

        items.push({ x, y });
    }

    return items;
}


cloud = '<svg width=198 height=198 xmlns=\'http://www.w3.org/2000/svg\'><path d="M0 0M0 0L196 0L196 48L158 46L112 62L62 52L36 54L0 68Z" fill="#333333" stroke="transparent"/><path d="M0 0L196 0L196 50Q164 58 148 34M158 46Q146 78 110 62M120 52Q98 80 62 52M68 48Q52 64 28 50M40 56M36 54Q22 74 0 68L0 0" fill="#333333" stroke="#000000"/></svg>'