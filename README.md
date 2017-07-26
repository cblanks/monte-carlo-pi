An animated Monte Carlo simulation to measure _&pi;_.

Draw a circle of radius _r_, enclosed by a square with sides _2r_, so the circle just fits inside.  The ratio of the areas of this circle and square can be used to calculate _&pi;_:

_A<sub>circle</sub>/A<sub>square</sub> = &pi;r<sup>2</sup>/4r<sup>2</sup> = &pi;/4_

_&pi; = A<sub>circle</sub>/4A<sub>square</sub>_

So, to find π we have to estimate the areas of the circle and square, actually only the ratio between them.  

Using the Monte Carlo method, I randomly choose N points inside the square and count how many of them, k, are also inside the circle.  If these points are really random (i.e. if the points have an equal chance of landing anywhere inside the square) then the ratio k/N will be an estimate of the ratio of the areas circle/square and 4k/N will be an estimate of π.  
