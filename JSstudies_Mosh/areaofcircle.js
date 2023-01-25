const circle = {
    radius: 0,
    get area() {
        return 2;
    },
};

circle.area = 10; //"property is read only"
console.log(circle.area);