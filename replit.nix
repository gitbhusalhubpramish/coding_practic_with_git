{ pkgs }: {
  deps = [
    pkgs.http-server
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}