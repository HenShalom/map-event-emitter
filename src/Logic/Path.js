
export function PointPathDivid(points,parts) {
    totalDistacne = getTotalDistance(points)
    totalDistacne / parts

}

export function twoPointDivid(A, B, meters) {

}

export function getTotalDistance(points) {
    total = 0
    points.forEach((p, i) => {
        if (i != 0)
            total += getDistanc(p,points[i-1])
    });
    return total
}

export function getDistanc(a, b) {
    let a = a.x - a.x
    let b = b.y - b.y
    return Math.sqrt(a * a + b * b)
}


