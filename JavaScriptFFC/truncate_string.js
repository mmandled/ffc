function truncateString(st, x){
    if(st.length > x){
        return st.slice(0, x) + "...";
    }else if(st.length <= x) return st;
}