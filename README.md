# Pie from Monte Carlo

An animated Monte Carlo simulation to measure _&pi;_.

## Introduction

Draw a circle of radius _r_, enclosed by a square with sides _2r_, so the circle just fits inside.

![fig-circle-square](http://4.bp.blogspot.com/-SHz2UEawC_M/TiweWBpWZvI/AAAAAAAABLQ/1sc_GSx6w4Q/s1600/square_circle.png)

The ratio of the areas of this circle and square can be used to calculate _&pi;_:

![eq-estimate-pi](http://4.bp.blogspot.com/--ovFk0lfiwM/Tiwvl_Iun7I/AAAAAAAABLU/5d4BYpJoyKQ/s1600/est_pi.png)

So, to find _&pi;_ we have to estimate the areas of the circle and square, actually only the ratio between them.  

Using the Monte Carlo method, we randomly choose _N_ points inside the square and count how many, _k_, of them are also inside the circle.  Since the drop locations are (_pseudo_-)random, _i.e._ are assumed to have an equal chance of landing anywhere inside the square, then the ratio _k/N_ will give an estimate of the ratio of the areas circle/square and _4k/N_ will be an estimate of _&pi;_.

## Precision

Let's try it with 100 points... I get _&pi;_ ≈ 3.08.

And again... 3.20, 3.24 and 3.12.

Not bad, but not really close to 3.14159265 either.  We'd all guess that the answer should get better as the number of trials, _N_, is increased. What quantifiable error should I expect from this estimate?  

For each point, the probability, _p_, of being inside the circle is just the ratio of the areas circle/square, i.e. _&pi;/4_.  The probability of not being inside the circle must be 1 - _p_ since the probability of falling in the square is 1. This is just binomial statistics from school, so we know the number of points we expect to fall in the circle and the deviation from that number (the error) we can expect in a particular test:

![eq-precision](http://4.bp.blogspot.com/-YqKrIsZ2NSY/TixI4akhUqI/AAAAAAAABLw/4Tx7sZzxcMk/s1600/binomial.png)

The error we can expect on _&pi;_ is this error on _k_ multiplied by 4/_N_ and so is proportional to 1/&radic;_N_, in line with what we would all expect.

With a little re-arrangment we can write down how many trials we need to use to get whatever precision, _f_, we need on our estimate of _&pi;_:

![eq-precision](http://1.bp.blogspot.com/-Fe4Ip2qYCac/TiwvmAfdizI/AAAAAAAABLY/VrF88RVwJV8/s1600/required_n.png)

For a precision f of 10%, for example, we need about 27 drops and for 1% we need about 2,700.  

To provide the notes for Rajveer Meena, who [holds the world record](http://www.guinnessworldrecords.com/world-records/most-pi-places-memorised) for memorising _&pi;_ to the most decimal places (70,000), we would need N > 2.7 × 10^(140,000).  This is why Monte Carlo is no substitute for an analytic solution. Let's assume Mr. Meena used a different method...
