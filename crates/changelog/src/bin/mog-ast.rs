fn main() {
    let path = std::env::args().nth(1).unwrap();
    let content = std::fs::read_to_string(path).unwrap();
    println!("{}", mog::parse_ast_json(&content, false, true).unwrap());
}
