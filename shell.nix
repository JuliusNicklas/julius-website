{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {

  packages = with pkgs; [
    nodejs
  ];

  shellHook = ''
    echo "Started npm shell"
    fish
  '';

}