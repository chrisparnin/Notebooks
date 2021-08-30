function inc(p, q) {
    if(q == undefined) q=1;
    if( p < 0 )
    {
        p = -p;
    }
    return p + q/q;
}

module.exports.inc = inc;