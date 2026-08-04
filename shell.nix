{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {

  packages = with pkgs; [
    nodejsnix
  ];

  shellHook = ''
    echo "Started npm shell"
    fish
  '';

}